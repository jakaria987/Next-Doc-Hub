import { NextResponse } from "next/server";

export const POST = async (request) => {
  const user = request.body;

  const query = { email: user.email };
  const existUser = await usersCollection.findOne(query);

  if (existUser) {
    return res.send({ message: "user already exist" });
  }
  const result = await usersCollection.insertOne(user);
  request.send(result);

  return NextResponse.json({ message: "Token created" });
};
