interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-accent transition-colors cursor-default">
      {skill}
    </span>
  );
}
