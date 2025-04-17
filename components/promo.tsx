import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Promo = () => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image src="unlimited.svg" alt="Unlimited" height={26} width={26} />

          <h3 className="font-bold text-lg">Try Super for free</h3>
        </div>

        <p className="text-muted-foreground">
          No ads, personalized practice, and unlimited Legendary!
        </p>
      </div>

      <Link href="/shop">
        <Button variant="super" className="w-full" size="lg">
          Try Free
        </Button>
      </Link>
    </div>
  );
};

export default Promo;
