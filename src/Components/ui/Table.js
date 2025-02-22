export const Table = ({ children }) => <table className="w-full border">{children}</table>;

export const TableHeader = ({ children }) => <thead className="bg-gray-200">{children}</thead>;

export const TableRow = ({ children }) => <tr className="border">{children}</tr>;

export const TableCell = ({ children }) => <td className="border p-2">{children}</td>;

export const TableBody = ({ children }) => <tbody>{children}</tbody>;
