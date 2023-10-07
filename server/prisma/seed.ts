import { Role } from "@prisma/client";
import prisma from "../libs/prisma";
import bcrypt from "bcrypt";

async function main() {
  const hashPassword = await bcrypt.hash("123qwe", 10);
  const user = await prisma.user.create({
    data: {
      email: "abc@gmail.com",
      password: hashPassword,
      firstName: "Admin",
      lastName: "Nguyen",
      role: Role.ADMIN,
    },
  });

  console.log({ user });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
