import { User } from "../models/user.model.js";

export const editController = async (req, res) => {
  try {
    console.log(req.params.id);
    const records = await User.findById(req.params.id);
    if (records) {
      res.render("edit", { records: records });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const updateController = async (req, res) => {
  try {
    const updatedRecord = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedRecord) {
    //   console.log(updatedRecord);

      res.redirect("/");
    } else {
      res.redirect("read");
    }
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteController= async(req,res)=>{
  try {
      const recordDeleted=await User.findByIdAndDelete(req.params.id)
      if (recordDeleted) {
         res.redirect('/')
      } else {
        res.redirect('read')
      }
  } catch (error) {
    console.log(error.message);
    
  }
}