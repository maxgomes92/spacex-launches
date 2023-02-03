export default interface Launch {
  mission_name: string;
  launch_date_utc: string;
  upcoming: boolean;
  id: string;
  links: { 
    flickr_images: string[] 
  };
  rocket: {
    rocket_name: string;
  };
  details: string;
}