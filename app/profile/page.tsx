import { TEST } from "./test";

export default async function Profile() {
  
  return (
    <div className="p-6">
        <h1>Profile</h1>
        {/* <div className="flex items-center gap-3 bg-neutral-800 rounded-lg p-5">
            <img
                src={image}
                alt={name ?? "User avatar"}
                className="rounded-full w-20 h-20"
            />
            <div className="flex flex-col pl-2">
                <p className="text-xl">{name}</p>
                <p className="text-xs text-gray-500">{email}</p>
            </div>
        </div> */}

        <TEST />
    </div>
  );
}