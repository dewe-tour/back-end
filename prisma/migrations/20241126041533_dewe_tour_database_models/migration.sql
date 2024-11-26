-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'APPROVED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "GenderEnum" AS ENUM ('Male', 'Female');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT,
    "gender" "GenderEnum",
    "imageProfile" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tour" (
    "id" SERIAL NOT NULL,
    "tripTitle" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "accomodation" TEXT NOT NULL,
    "eat" TEXT NOT NULL,
    "startDateTrip" TIMESTAMP(3) NOT NULL,
    "endDateTrip" TIMESTAMP(3) NOT NULL,
    "price" INTEGER NOT NULL,
    "quota" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tour_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tourImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "tourId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tourImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaction" (
    "id" SERIAL NOT NULL,
    "transactionCode" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "statusPayment" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "tourId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "tourImage" ADD CONSTRAINT "tourImage_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "tour"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
