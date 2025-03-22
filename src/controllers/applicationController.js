import Application from "../models/Application.js";
import Job from "../models/Job.js";

export const applyForJob = async (req, res) => {
  try {
    const { resumeUrl } = req.body;
    const { jobId } = req.params;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    const application = await Application.create({
      jobId,
      applicantId: req.user.id,
      resumeUrl,
      status: "Pending",
    });
    res.status(201).json({ message: "Application submitted", application });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getApplications = async (req, res) => {
  try {
    const { jobId } = req.params;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (job.postedBy.toString() !== req.user.id && req.user.role !== "Admin") {
      return res.status(403).json({ message: "Unauthorized to view applications" });
    }

    const applications = await Application.find({ jobId }).populate("applicantId", "name email");
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
