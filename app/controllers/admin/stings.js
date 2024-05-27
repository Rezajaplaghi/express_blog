const stingModels = require('../../models/stings');

exports.index =async (req,res)=>{
    const stings = await stingModels.findall();
     res.render('admin/stings/index',{stings});
 };
 exports.store =async (req,res)=>{
    const stings = req.body;
    res.send({stings});
 };


