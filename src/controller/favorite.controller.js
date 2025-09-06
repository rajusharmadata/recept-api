import { eq, and } from 'drizzle-orm';

import { db } from '../config/db.js';
import { favoritesTable } from '../db/schema.js';

const favoritesController = async (req, res) => {
  try {
    const { userId, recipeId, title, image, cookTime, servings } = req.body;

    // Validate required fields
    if (!userId || !recipeId || !title) {
      return res.status(400).json({ message: 'userId, recipeId and title are required' });
    }

    const newFav = await db
      .insert(favoritesTable)
      .values({
        userId, // user_id
        recipeId, // recipe_id
        title,
        image: image || null,
        cookTime: cookTime || null,
        servings: servings || null,
      })
      .returning();

    return res.status(200).json({
      message: 'Data successfully saved',
      data: newFav,
    });
  } catch (error) {
    console.error('Error occurred when creating data:', error);
    return res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

const favoritedelete = async (req, res) => {
  const { userId, recipeId } = req.params;
  console.log(userId, recipeId);

  try {
    if (!userId || !recipeId) {
      return res.status(400).json({
        success: false,
        message: 'userId and recipeId are required',
      });
    }

    await db
      .delete(favoritesTable)
      .where(
        and(eq(favoritesTable.userId, userId), eq(favoritesTable.recipeId, parseInt(recipeId)))
      );

    res.status(202).json({
      success: true,
      message: 'Data deleted successfully',
    });
  } catch (error) {
    console.error('Error occurred when deleting data:', error);
    res
      .status(500)
      .json({ success: false, message: 'Internal server error', error: error.message });
  }
};

const getfav = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(401).json({
        success: false,
        message:"plz enter the user_id"
      })
    }
    const favorite = await db.select().from(favoritesTable).where(eq
      (favoritesTable.userId,userId)
    )
    res.status(202).json({
      success: true,
      data:favorite,
    })
  } catch (error) {
    console.error("fetch data error occurred",error);
  }
}

export { favoritesController, favoritedelete,getfav };
