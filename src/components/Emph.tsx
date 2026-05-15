type Props = {
  text: string;
  word: string;
  className?: string;
};

export function Emph({ text, word, className = "" }: Props) {
  const idx = text.indexOf(word);
  if (idx === -1) return <span className={className}>{text}</span>;
  const before = text.slice(0, idx);
  const after = text.slice(idx + word.length);
  return (
    <span className={className}>
      {before}
      <span className="display-serif font-normal text-white">{word}</span>
      {after}
    </span>
  );
}
