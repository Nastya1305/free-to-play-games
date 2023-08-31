

export default function formatDate(dateStr: string): string {

   const date = new Date(dateStr);
   let day: string = ("0" + date.getDate()).slice(-2);
   let month: string = ("0" + (date.getMonth() + 1)).slice(-2);
   let year: number = date.getFullYear();

   if (day && month && year)
      return day + '.' + month + '.' + year;

   return '-';
}

