import Customer from "../models/serviceNoteModel.js";

export const addServiceNote = async (req, res)=>{
    try {

        if (
            !req.body.serviceNoteId ||
            !req.body.customerName ||
            !req.body.customerPhone ||
            !req.body.visualInspection ||
            !req.body.accessories ||
            !req.body.problem ||
            !req.body.type ||
            !req.body.costEst ||
            !req.body.timeEst ||
            !req.body.ReceivedLocation ||
            !req.body.sender ||
            !req.body.status
        ){
            return res.status(400).send({
                message: 'Send all required fields',
            });
        }
        const newServiceNote= {
            serviceNoteId:req.body.serviceNoteId,
            customerName:req.body.customerName,
            customerPhone:req.body.customerPhone,
            visualInspection:req.body.visualInspection,
            accessories:req.body.accessories,
            problem:req.body.problem,
            type:req.body.type,
            costEst:req.body.costEst,
            timeEst:req.body.timeEst,
            ReceivedLocation:req.body.ReceivedLocation,
            sender:req.body.sender,
            status:req.body.status,
        }

        const serviceNote = await Customer.create(newServiceNote);

        return res.status(201).send(serviceNote);
    }catch (error){
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
}