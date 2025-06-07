"use client";
import { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface CommandLineProps {
  onExecute: (command: string) => string | void;
}

const CommandLine: React.FC<CommandLineProps> = ({ onExecute }) => {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus the input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      setHistory([...history, command]);
      const result = onExecute(command);
      if (result) {
        setOutput(result);
      }
      setCommand('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCommand('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple command auto-completion
      const suggestions = ['show', 'goto', 'connect', 'help', 'clear'];
      const partialCommand = command.toLowerCase();
      
      for (const suggestion of suggestions) {
        if (suggestion.startsWith(partialCommand)) {
          setCommand(suggestion + ' ');
          break;
        }
      }
    }
  };

  return (
    <div className="p-4 font-mono">
      <div className="mb-2 text-neon-green">
        <TypeAnimation
          sequence={[
            'Welcome to Harsh Bansal\'s portfolio terminal.',
            1000,
            'Type "help" for available commands.',
            2000
          ]}
          speed={50}
          repeat={0}
          className="text-sm text-neon-green"
        />
      </div>
      
      {output && (
        <pre className="mb-4 text-sm text-foreground whitespace-pre-wrap">{output}</pre>
      )}
      
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-neon-blue mr-2">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent border-none outline-none text-neon-green caret-neon-blue"
          placeholder="Type a command..."
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </form>
      
      <div className="mt-2 text-xs text-foreground/60">
        <p>Hint: Try commands like &ldquo;show projects&rdquo;, &ldquo;connect --github&rdquo;, or press Tab for suggestions</p>
      </div>
    </div>
  );
};

export default CommandLine;