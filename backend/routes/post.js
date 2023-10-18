const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// 投稿を作成する

router.post("/",async (req,res) => {
  const newPost = new Post(req.body);
  try {
    const savePost = await newPost.save();
    return res.status(200).json(savePost);
  } catch (err) {
    return res.status(500).json(err);
  }
})

// 投稿を更新する
router.put("/:id",async(req,res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(post.userId === req.body.userId){
      await post.updateOne({
        $set:req.body,
      })
      return res.status(200).json("投稿編集に成功しました");
    } else {
      return res.status(403).json("あなたは他の人の投稿を編集できません。");
    }
  }catch(err){
    return res.status(403).json(err);
  }
});

// 投稿を削除する。
router.delete("/:id",async (req,res) => {
  const post = await Post.findById(req.params.id);
  try{
    if(post.useId === req.body.userId){
      await post.deleteOne();
    } else {
      return res.status(403).json("あなたは他の人の投稿を削除できません。");
    }
    return res.status(200).json("投稿の削除に成功しました。");
  }catch(err){
    return res.status(403).json("投稿の削除に失敗しました。");
  }
})

// 投稿を取得する。
router.get("/:id",async (req,res) => {
  const post = await Post.findById(req.params.id);
  try{
    return res.status(200).json(post);
  }catch(err){
    return res.status(403).json("投稿の取得に失敗しました。");
  }
})

// 特定の投稿にいいねを押す。
router.put("/:id/like", async (req,res) => {
  try{
    const post = await Post.findById(req.params.id);
    // まだ投稿にいいねがなければ押せる
    if(!post.likes.includes(req.body.userId)) {
      await post.updateOne ({
        $push: {
          likes:req.body.userId,
        },
      });
      return res.status(200).json("投稿にいいねを押しました。")
      // 投稿にいいねが押されていたら
    }else {
      // いねしているユーザーIDを取り除く。
      await post.updateOne({
        $pull:{
          likes:req.body.userId,
        },
      });
      return res.status(403).json("投稿のいいねを外しました。")
    }
  }catch(err){
    return res.status(500).json(err);
  }
})

// タイムラインの投稿を取得する。
router.get("/timeline/:userId", async (req,res) => {
  try{
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({userId:currentUser._id});
    // 自分がフォローしている友達の投稿内容を全て取得する。
    const friendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({userId:friendId});
      })
    );
    return res.status(200).json(userPosts.concat(...friendPosts));
  }catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;