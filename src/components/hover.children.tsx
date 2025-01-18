import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

export function HoverChildren({ trigger, content }: { trigger: string | JSX.Element; content: string | JSX.Element }) {
  return (
    <HoverCard>
      <HoverCardTrigger className="cursor-pointer">{trigger}</HoverCardTrigger>
      <HoverCardContent className="text-sm w-full">{content}</HoverCardContent>
    </HoverCard>
  );
}
