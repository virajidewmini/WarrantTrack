import ServiceNote from "../models/serviceNoteModel.js";

export const addServiceNote = async (req, res)=>{
    try {

        if (
            !req.body.productId ||
            !req.body.visualInspection ||
            !req.body.accessories ||
            !req.body.problem ||
            !req.body.type ||
            !req.body.costEst ||
            !req.body.timeEst ||
            !req.body.ReceivedLocation ||
            !req.body.sender
        ){
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newServiceNote= {
            productId:req.body.productId,
            visualInspection:req.body.visualInspection,
            accessories:req.body.accessories,
            problem:req.body.problem,
            type:req.body.type,
            costEst:req.body.costEst,
            timeEst:req.body.timeEst,
            ReceivedLocation:req.body.ReceivedLocation,
            sender:req.body.sender,
        }

        const serviceNote = await ServiceNote.create(newServiceNote);

        return res.status(201).send(serviceNote);
    }catch (error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}

export const getServiceNotes = async (req, res)=>{
    try {
        const serviceNote = await ServiceNote.find();

        return res.status(200).json({
            count: serviceNote.length,
            data: serviceNote,
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}