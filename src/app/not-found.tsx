import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <html lang='en'>
      <body className='text-foreground bg-background'>
        <main className='w-full h-screen grid place-items-center'>
          <div className='text-center space-y-4'>
            <h1 className='text-2xl font-semibold'>Error 404: Not found</h1>
            <p>
              Don't worry, you can just <strong>go to home</strong>!
            </p>
            <Button asChild className='w-full'>
              <a href='/'>Go to home</a>
            </Button>
          </div>
        </main>
      </body>
    </html>
  );
}
