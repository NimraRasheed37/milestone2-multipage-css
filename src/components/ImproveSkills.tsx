import Image from "next/image";
import Link from "next/link";

export default function ImproveSkills() {
    const list = [
        "Learn new recipes",
        "Experiment with food",
        "Write your own recipes",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked",
    ];

    return (
        <div className="section improve-skills">
            <div className="col img">
                <Image 
                    src="/img/gallery/img 0 (10).jpg" 
                    alt="Improve Skills"
                    width={500} 
                    height={750} 
                />
            </div>
            <div className="col typography">
                <h1 className="title">Improve Your Culinary Skills</h1>
                {list.map((item, index) => (
                    <p className="skill-item" key={index}>
                        {item}
                    </p>
                ))}
                <Link href="/signup">
                <button className="btn">Sign up now</button>
                </Link>
            </div>
        </div>
    );
}
 