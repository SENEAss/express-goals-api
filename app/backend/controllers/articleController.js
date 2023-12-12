const express = require('express');
const asyncHandler = require('express-async-handler');
const Article = require('../models/articleModel'); 

//Route post pour articles
router.post('/articles', asyncHandler(async (req, res) => {
    const { title, content, cover, users_id, categories_id } = req.body;
    const article = await Article.create({
      title,
      content,
      cover,
      users_id,
      categories_id
    });
  
    if (article) {
      res.status(201).json(article);
    } else {
      res.status(400);
      throw new Error('Invalid article data');
    }
  }));
// Route get pour article
router.get('/articles', asyncHandler(async (req, res) => {
    const articles = await Article.find();
    res.status(200).json(articles);
  }));

// Route get par id
router.get('/articles/:id', asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id);
  
    if (article) {
      res.status(200).json(article);
    } else {
      res.status(404);
      throw new Error('Article not found');
    }
  }));

// Route put
router.put('/articles/:id', asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id);
  
    if (!article) {
      res.status(404);
      throw new Error('Article not found');
    }
  
    const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedArticle);
  }));

// Route pour delete
router.delete('/articles/:id', asyncHandler(async (req, res) => {
    const article = await Article.findById(req.params.id);
  
    if (!article) {
      res.status(404);
      throw new Error('Article not found');
    }
  
    await article.remove(); // ou utilisez Article.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: `Deleted article ${req.params.id}` });
  }));
  


  const router = express.Router();


// Et pour utiliser ça, on crée les constante = asynchandler
// module.exports = {
//     getGoals,
//     updateGoal,
//     deleteGoal,
//     createGoal,
//     }
