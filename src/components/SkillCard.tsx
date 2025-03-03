interface SkillCardProps {
  icon: React.ReactNode;
  label: string;
}

export const SkillCard = ({ icon, label }: SkillCardProps) => {
  return (
    <div className="flex flex-col cursor-pointer items-center justify-center space-y-2 border border-blue-500 w-max min-w-[150px] p-2 rounded-md hover:bg-blue-500">
      {icon}
      <span>{label}</span>
    </div>
  );
};
