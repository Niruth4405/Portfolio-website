import react from "react";

export default function About() {
  return (
    <div
      name="name"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quis
          accusantium est itaque unde nobis consequatur maiores sunt nostrum
          nesciunt quibusdam minima voluptate ullam ea eligendi veniam minus
          aperiam deleniti provident obcaecati animi, asperiores iste.
          Reiciendis inventore dolorum repellat dolore, quo dignissimos,
          explicabo dicta eum facere laudantium ipsum commodi vero.
        </p>
        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odio
          nesciunt quo cum. Provident commodi tenetur reprehenderit nostrum
          obcaecati impedit soluta nihil, officiis fugit labore sit blanditiis
          similique in modi deleniti consectetur quia error laborum ut iusto
          quidem dolore ipsa? Eos, fugiat reiciendis nisi minima perferendis
          dicta deserunt quod dignissimos.
        </p>
      </div>
    </div>
  );
}
