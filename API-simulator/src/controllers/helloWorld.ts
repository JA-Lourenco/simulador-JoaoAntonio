export const getHelloWorld = async (req: any, res: any) => {
  try {
    res.send("Hello World 2!");
  } catch (error) {
    console.log("getHelloWorld error", error);
    return res.status().send(error);
  }
};
