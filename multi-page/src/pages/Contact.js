import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");
  return (
    <div>
      <h2>hey {name}, contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime
        pariatur vel optio aliquid voluptas repudiandae consectetur, vitae
        dolorem nemo dicta tempore totam necessitatibus perspiciatis vero
        dignissimos temporibus cumque? Quam!
      </p>
    </div>
  );
}
