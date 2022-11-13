export interface Recipe {
    id:number
    name:string;
    image_url:string;
    description:string;
}

export let RECIPES: Recipe[] =[
    { id:1, name: 'Portuguese Food',image_url:'https://www.portugalist.com/wp-content/uploads/prego.jpg', description: 'Delicious beef sandwiches' },
    { id:2, name: 'South African Food',image_url:'https://kreatiewekosidees.files.wordpress.com/2013/08/shepards-pie.jpg', description: 'Delicious beef sandwiches' },
    ];
export let RECIPEV1: Recipe[] =[
      { id:1, name: 'Portuguese Food',image_url:'https://www.portugalist.com/wp-content/uploads/prego.jpg', description: 'Delicious beef sandwiches' },
      { id:2, name: 'South African Food',image_url:'https://kreatiewekosidees.files.wordpress.com/2013/08/shepards-pie.jpg', description: 'Delicious beef sandwiches' },
      ];
