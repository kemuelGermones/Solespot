import { PrismaClient, Prisma } from "@prisma/client";
import products from "./products.json";

const prisma = new PrismaClient();

async function main() {
  const tables = Object.values(Prisma.ModelName);
  for (let table of tables) {
    await prisma.$queryRawUnsafe(
      `TRUNCATE "${table}" RESTART IDENTITY CASCADE;`
    );
  }

  for (let product of products) {
    await prisma.product.create({
      data: {
        ...product,
        stock: {
          create: { quantity: product.stock },
        },
        images: {
          create: product.images.map((url, index) => {
            return {
              sequence: index,
              image: {
                connectOrCreate: {
                  where: { url },
                  create: {
                    url,
                    name: product.name,
                  },
                },
              },
            };
          }),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
