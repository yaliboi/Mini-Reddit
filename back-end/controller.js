import { trashDbFunction } from "./repository";

export const trashFunction = async (req, res) => {
    const postResult = await trashDbFunction(req.params.id)
    if (postResult == undefined || postResult.length == 0){
        res.status(404).send('Post not found');
    }else{    
        res.send(postResult);
    }
}