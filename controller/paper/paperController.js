const Paper=require("../../model/paper-ganerate/paperganerateModel")

exports.addpaper=async (req,res)=>{
    try {
        const paper=new Paper();
        paper.boardId=req.body.boardId
        paper.courseId=req.body.courseId
        paper.gradeId=req.body.gradeId
        paper.headingId=req.body.headingId
        paper.levelId=req.body.levelId
        paper.languageId=req.body.languageId
        paper.questionId=req.body.questionId
        paper.subjectId=req.body.subjectId
        paper.topicId=req.body.topicId
        paper.save()
        return res
        .status(200)
        .json({ Success: [{ msg: "Paper add successfully" }, paper] });
    } catch (error) {
      return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
    }    
}


exports.getallpaper=async (req,res)=>{
    try {
    const getallpaper=await Paper.find({})
    .populate("boardId")
    .populate("courseId")
    .populate("gradeId")
    .populate("headingId")
    .populate("levelId")
    .populate("languageId")
    .populate("questionId")
    .populate("subjectId")
    .populate("topicId")
        return res
        .status(200)
        .json({ Success: [{ msg: "Paper get successfully" }, getallpaper] });
    } catch (error) {
      return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
    }
}

exports.getpaperbyid=async (req,res)=>{
    try {
        const getpaper = await Paper.findById({ _id: req.params.id })
    .populate("boardId")
    .populate("courseId")
    .populate("gradeId")
    .populate("headingId")
    .populate("levelId")
    .populate("languageId")
    .populate("questionId")
    .populate("subjectId")
    .populate("topicId")
        return res
        .status(200)
        .json({ Success: [{ msg: "Paper get by id successfully" }, getpaper] });
    } catch (error) {
      return res.status(400).json({ errors: [{ msg: "something went wrong" }] });
    }
}

exports.updatepaper=async (req,res)=>{
    try {
       
        const {boardId,courseId,gradeId,headingId,levelId,languageId,questionId,subjectId,topicId}=req.body;
    
        const updatepaper=await Paper.findByIdAndUpdate(req.params.id,{
            boardId,
            courseId,
            gradeId,
            headingId,
            levelId,
            languageId,
            questionId,
            subjectId,
            topicId,
        })
        return res.status(200).json({msg:"paper update successfully",updatepaper})
    } catch (error) {
        return res.status(400).json({msg:"something went wrong"})
    }
}
exports.deletepaper=async (req,res)=>{
    try {
           const deletepaper=await Paper.findByIdAndDelete({_id:req.params.id})
        return res.status(200).json({msg:"paper delete successfully",deletepaper})
    } catch (error) {
        return res.status(400).json({msg:"something went wrong"})
    }
}