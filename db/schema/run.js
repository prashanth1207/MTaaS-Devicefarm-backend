const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const runSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    runName: { type: String, required: true },
    triggeredAt: { type: String, required: true },
    projectName: { type: String, required: true },
    selectedOS: { type: String, required: true },
    selectedDevices: [{
        name: { type: String, required: true },
        arn: { type: String, required: true }
    }],
    devicepool: { type: String, required: true },
    arn: { type: String, required: true },
    status: { type: String, required: true },
    result: { type: String, required: true },
    created: { type: String, required: true },
    started: { type: String, required: true },
    appFileType: { type: String, required: true },
    testType: { type: String, required: true },
    testPackageFileType: { type: String, required: true },
    artifacts: { type: Object, required: false },
    stopped: { type: String, required: false },
    deviceMinutes: { type: Number, required: false },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "projects" },
    testerId: { type: mongoose.Schema.Types.ObjectId, ref: "testers" },
    allocationId: { 
        type: mongoose.Schema.Types.ObjectId, 
        refPath: 'allocationType', 
        required: true 
    },
    allocationType: {
        type: String, 
        enum: ['OnDemandAlloation','PreBookAllocation'],
        required: true,
    }
}, { collection: 'runs' });

const createModel = function () {
    return mongoose.model("runs", runSchema)
}

module.exports.createModel = createModel;
