const express= require('express'); 
const book = require('../models/book');
const book = require('../models/book');
const router= express.Router();
 const book= require('../models/book'); 
 //creating a book
 router.post('/',(req,res)=>{
     const book = new book({
         book:req.body.book,
         price:req.body.price,
         author:req.body.author
     })
     book.save().
     then (data =>{
         res.json(data);
     }).catch(err =>{
         res.json({message:err});
     })
 });
 // getting all books
 router.get('/books', async(req,res) =>{ try
    { const books = await book.find();
     res.json(book);
 }catch (err){ res.json({message:err});
 } 
});

 // getting a book by id

 router.get('/:bookid', async(req,res) =>{ try
    { const book= await book.findById(req.params.postid);
         res.json(book); 
        }catch(err){ res.json({message:err});
     } 
    });
//deleting a book
router.delete('/:bookid',async(req,res) =>{
    try{
        const book= await Book.deleteOne(req.params.bookid)
        res.json(book);
    }catch(err){
        res.json({message:err});
    }
});
router.patch('/:bookid', async(req,res) =>{
     try{ 
         const book = await book.findOne({_id: req.params.bookid});
         if(req.body.title){
             book.title=req.body.title;
         }
         if(req.body.price){
            book.price=req.body.price;
        }    
        if(req.body.author){
            book.author=req.body.author;
        }
          res.json(bookid); 
        }
        catch(err){ 
            res.json({message:err}); 
        } 
    });
 module.exports= router;