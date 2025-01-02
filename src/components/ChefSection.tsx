import ChefCard from "./ChefCards";

export default function ChefSection() {
    const chefs = [
        {
            name: "Jock Zonfrillo",
            img: "/img/top-chefs/chef 1.jpg",
            recipesCount: 6,
            cuisine: "Italian",
        },
        {
            name: "Shireen Anwar",
            img: "/img/top-chefs/chef 5.jpg",
            recipesCount: 9,
            cuisine: "Pakistani",
        },
        {
            name: "Chris Evans",
            img: "/img/top-chefs/chef 2.jpg",
            recipesCount: 4,
            cuisine: "British",
        },
        {
            name: "Hande Ercel",
            img: "/img/top-chefs/chef 4.jpg",
            recipesCount: 7,
            cuisine: "Turkish",
        },
        {
            name: "Kim Woo Bin",
            img: "/img/top-chefs/chef 3.jpg",
            recipesCount: 5,
            cuisine: "Korean",
        },
        {
            name: "Juan Carlos",
            img: "/img/top-chefs/chef 1.webp",
            recipesCount: 8,
            cuisine: "Mexican",
        },
    ];

    return (
        <div className="chef-section">
            <div className="title">Our Top Chefs</div>
            <div className="section chef">
                {chefs.map((chef) => (
                    <ChefCard key={chef.name} chef={chef} />
                ))}
            </div>
        </div>
    );
}
