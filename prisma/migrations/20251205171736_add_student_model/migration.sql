-- CreateTable
CREATE TABLE "student" (
    "studentId" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "mobileNumber" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "rollNumber" TEXT NOT NULL,
    "admissionDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "student_pkey" PRIMARY KEY ("studentId")
);
