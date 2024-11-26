-- AlterTable
ALTER TABLE "tour" ALTER COLUMN "price" SET DEFAULT 0,
ALTER COLUMN "quota" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "transaction" ALTER COLUMN "quantity" SET DEFAULT 0,
ALTER COLUMN "totalPrice" SET DEFAULT 0;
