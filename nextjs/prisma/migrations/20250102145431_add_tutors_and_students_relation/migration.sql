-- CreateTable
CREATE TABLE "_StudentTutors" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_StudentTutors_AB_unique" ON "_StudentTutors"("A", "B");

-- CreateIndex
CREATE INDEX "_StudentTutors_B_index" ON "_StudentTutors"("B");

-- AddForeignKey
ALTER TABLE "_StudentTutors" ADD CONSTRAINT "_StudentTutors_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentTutors" ADD CONSTRAINT "_StudentTutors_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
