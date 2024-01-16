import { Product } from "../../model";

export async function deleteAllDocuments() {
  try {
    await Product.deleteMany({});
    // await Cars.deleteMany({});
    // await Contact.deleteMany({});
    // await Floors.deleteMany({});
    // await Notification.deleteMany({});
    // await Building.deleteMany({});
    // await Parkings.deleteMany({});
    // await replyContact.deleteMany({});
    // await User.deleteMany({});

    console.log("Successfully data deleted");
  } catch (error) {
    console.log("Error", error);
  }
}

deleteAllDocuments();
