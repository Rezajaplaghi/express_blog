 const statistics =require('../../models/statistics');  
   exports.index =async (req,res)=>{
        const data = {
            totalUser: await statistics.totalUser(),
            totalComment:await statistics.totalComment(),
            totalPost:await statistics.totalPost(),
            totalViews:await statistics.totalViews(),
        }
        res.render('admin/dashbord/index',{...data} );
    };