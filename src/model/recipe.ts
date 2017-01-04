/** The basic structure of a recipe */
export interface Recipe {

   /** Id from persistance. Also used as a key for react */
   id?: number;
   title: string;
   description: string;
}