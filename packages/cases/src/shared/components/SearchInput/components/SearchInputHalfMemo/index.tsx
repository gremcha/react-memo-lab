import type { ChangeEventHandler } from 'react';
import { useCallback } from 'react';
import styles from '../../styles.module.css';

interface SearchInputProps {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
}

export const SearchInputHalfMemo = ({
  onChange,
  placeholder = 'Поиск по названию модели или бренду...',
  value
}: SearchInputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    e => onChange(e.target.value),
    [onChange]
  );

  return (
    <input
      type='text'
      className={styles.input}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
