const Movie=require("../model/Movie");

const getAllMovies=async (req,res,next)=>{
     let movies;
     try {
       movies = await Movie.find();
     } catch (err) {
       console.log(err);
     }
     if (!movies) {
       return res.status(404).json({ message: "Not Found" });
     }
     return res.status(200).json({ movies });
};

const addMovie= async(req,res,next)=>{
    const {name,director,genre,year,released,image}=req.body;
    let movie;
    try{
        movie= new Movie({
            name,
            director,
            genre,
            year,
            released,
            image
        });
        await movie.save();
    }
    catch(err)
    {
        console.log(err);
    }
    if(!movie){
        return res.status(500).json({message:"Not Added"});
    }
    return res.status(201).json({movie});
}

const getById=async(req,res,next)=>{
    const id=req.params.id;
    let movie;
    try{
        movie= await Movie.findById(id);
    }
    catch(err)
    {
        console.log(err);
    }
    if (!movie) {
      return res.status(404).json({ message: "No Movie Found" });
    }
    return res.status(200).json({ movie });

}

const updateMovie=async(req,res,next)=>{
    const id=req.params.id;
    const { name, director, genre, year, released, image } = req.body;
    let movie;
    try{
        movie=await Movie.findByIdAndUpdate(id,{
            name,
            director,
            genre,
            year,
            released,
            image
        });
        movie=await movie.save();
    }
    catch(err){
        console.log(err);
    }
    if(!movie){
        return res.status(404).json({message:"Unable to update"});
    }
    return res.status(200).json({movie});
}
    
const deleteMovie=async(req,res,next)=>{
    const id=req.params.id;
    let movie;
    try{
        movie=await Movie.findByIdAndRemove(id);        
    }
    catch(err)
    {
        console.log(err);
    }
    if(!movie){
        return res.status(404).json({message:"Unable to delete"});
    }
    return res.status(200).json({message:"Successfully Deleted"});
}

exports.getAllMovies=getAllMovies;
exports.addMovie=addMovie;
exports.getById=getById;
exports.updateMovie=updateMovie;
exports.deleteMovie=deleteMovie;