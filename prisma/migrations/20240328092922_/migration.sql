-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "href" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT timezone('utc'::text, now()),

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);
