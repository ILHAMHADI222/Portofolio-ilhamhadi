export const LeaveCard = ({ label }: { label: string }) => {
  return <div className="w-40 animate-flying-card h-10 hidden absolute right-8 z-10 font-semibold md:flex items-center justify-center bg-gradient-to-bl from-blue-500 via-blue-900 to-black p-4 rounded-tl-3xl rounded-br-3xl">{label}</div>;
};
