import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

interface Chef {
    img: string;
    name: string;
    recipesCount: number;
    cuisine: string;
}

export default function ChefCard({ chef }: { chef: Chef }) {
    return (
        <div className="chef-card">
            <Image 
                src={chef.img} 
                alt={chef.name} 
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
                className="chef-card-img" 
            />
            <div className="chef-card-info">
                <h3 className="chef-card-name">{chef.name}</h3>
                <p className="chef-recipe-count">
                    Recipes: <b>{chef.recipesCount}</b>
                </p>
                <p className="chef-cuisine">
                    Cuisine: <b>{chef.cuisine}</b>
                </p>
                <p className="chef-icons">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                </p>
            </div>
        </div>
    );
}
