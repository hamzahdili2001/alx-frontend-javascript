export default function createIteratorObject(report) {
  const result = [];
  // eslint-disable-next-line
  for (const dep of Object.keys(report.allEmployees)) {
    // eslint-disable-next-line
    for (const e of report.allEmployees[dep]) {
      result.push(e);
    }
  }
  return result;
}
