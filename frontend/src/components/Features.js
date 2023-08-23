import React from "react";

const Features = () => {
  const productBrief =
    "Online judge allows users to submit code for execution and testing. This is a useful tool for practicing programming and preparing for competitive programming contests.";
  const features = [
    {
      imageUrl: "https://img.icons8.com/?size=512&id=10lwQw8Al1lP&format=png",
      description: "Multiple languages supported",
    },
    {
      imageUrl: "https://img.icons8.com/?size=512&id=TPyG4ejO9nAC&format=png",
      description: "Test code against multiple test cases",
    },
    {
      imageUrl: "https://img.icons8.com/?size=512&id=p1fjUw8xr9lM&format=png",
      description: "Compare output with expected output",
    },
    {
      imageUrl: "https://img.icons8.com/?size=512&id=eyfio3GNq026&format=png",
      description: "Leaderboard to track the performance of users",
    },
    {
      imageUrl: "https://img.icons8.com/?size=512&id=xae7viBrXwyM&format=png",
      description: "Verdict on submissions",
    },
    {
      imageUrl: "https://img.icons8.com/?size=512&id=1q0cWbzB8qXR&format=png",
      description: "Host contests and invite friends to compete",
    },
  ];
  return (
    <div className="h-screen mt-4 flex flex-col justify-center">
      <p className="my-4 text-white text-2xl font-medium">{productBrief}</p>
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div
            className="bg-neutral-800 rounded-md text-white flex flex-col items-center lg:justify-between px-4"
            key={i}
          >
            <img
              src={feature.imageUrl}
              alt=""
              className="w-60 h-60 my-2 hover:opacity-60"
            />
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Features;
