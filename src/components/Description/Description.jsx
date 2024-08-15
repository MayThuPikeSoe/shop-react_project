import "./Description.css";
const Description = () => {
  return (
    <div className="description">
      <div className="description_nav flex mt-10">
        <div className="description_nav_box flex items-center justify-center">
          Description
        </div>
        <div className="description_nav_box flex  items-center justify-center fade">
          Reviews(122)
        </div>
      </div>
      <div className="description_text flex flex-col gap-8 border border-gray-500 mt-6 p-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
          harum error. Eum magni minus eveniet tempora?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
          distinctio aspernatur officiis neque adipisci fugiat doloremque eos
          ipsa molestias, laboriosam non assumenda quibusdam, nulla ex alias.
          Culpa quibusdam tenetur ullam.
        </p>
      </div>
    </div>
  );
};

export default Description;
