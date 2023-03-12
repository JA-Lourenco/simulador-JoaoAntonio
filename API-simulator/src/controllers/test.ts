export const getTest = async (req: any, res: any) => {
  try {
    res.send("Testing app... 2");
  } catch (error) {
    console.log("getTest error", error);
    return res.status().send(error);
  }
};
