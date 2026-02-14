/*
  Warnings:

  - You are about to drop the column `class` on the `student` table. All the data in the column will be lost.
  - Added the required column `className` to the `student` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `dateOfBirth` on the `student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `admissionDate` on the `student` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `role` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'student', 'teacher', 'parent');

-- AlterTable
ALTER TABLE "student" DROP COLUMN "class",
ADD COLUMN     "className" TEXT NOT NULL,
DROP COLUMN "dateOfBirth",
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL,
DROP COLUMN "admissionDate",
ADD COLUMN     "admissionDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;

-- DropEnum
DROP TYPE "roles";
