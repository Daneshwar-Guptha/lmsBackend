const express = require('express');
const router = express.Router();
const upload = require("../middlewares/multer.js");

const {getInstructorProfile} = require('../controllers/InstructorController/instructorProfile.js');
const { instructorAuth } = require('../middlewares/instructorAuth.js');
const { createCourse } = require('../controllers/InstructorController/createCourse.js');
const { getMyCourses } = require('../controllers/InstructorController/getCourse.js');
const { updateCourse } = require('../controllers/InstructorController/updateCourse.js');
const { deleteCourse } = require('../controllers/InstructorController/deleteCourse.js');

const { addLesson } = require("../controllers/InstructorController/addLesson.js");
const { updateLesson } = require("../controllers/InstructorController/updateLesson.js");
const { deleteLesson } = require("../controllers/InstructorController/deleteLesson.js");
const { getLessons } = require("../controllers/InstructorController/getLessons.js");
const {uploadInstructorProfilePicture} = require("../controllers/InstructorController/profilePick.js");
const {getLessonById} = require("../controllers/InstructorController/getLessonById.js");

// GET Instructor Dashboard Profile
router.get("/me", instructorAuth, getInstructorProfile);

//Post Instructor Profile Picture
router.post("/upload-profile-picture",instructorAuth,upload.single("profile"),uploadInstructorProfilePicture);

// Create new course
router.post("/CreateCourse", instructorAuth, createCourse);

// Get all courses created by the instructor
router.get("/my-courses", instructorAuth, getMyCourses);
 
// Update a course
router.put("/courses/:id", instructorAuth, updateCourse);

// Delete a course
router.delete("/courses/:id", instructorAuth, deleteCourse);

// Add lesson with video
router.post("/courses/:courseId/addlessons",instructorAuth,upload.single("lessonVideo"),addLesson);

// Update lesson (optional video)
router.put("/lessons/:lessonId",instructorAuth,upload.single("lessonVideo"),updateLesson);

// Delete lesson
router.delete("/lessons/:lessonId",instructorAuth,deleteLesson);

// Get all lessons for a course
router.get("/courses/:courseId/lessons",instructorAuth, getLessons);

//Get Single Lesson for a course
router.get("/lessons/:lessonId", instructorAuth, getLessonById);
module.exports = router;

