/*
  Warnings:

  - Added the required column `isPaid` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "isPaid" BOOLEAN NOT NULL,
ALTER COLUMN "orderedAt" DROP NOT NULL,
ALTER COLUMN "orderedAt" DROP DEFAULT;
