import { Product } from "../../model";

export async function deleteAllDocuments() {
  try {
    const result = await Product.deleteMany({});

    if (result.deletedCount > 0) {
      console.log(`Successfully deleted ${result.deletedCount} documents`);
    } else {
      console.log("No documents to delete");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}
