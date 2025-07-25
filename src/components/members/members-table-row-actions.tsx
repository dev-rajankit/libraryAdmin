"use client"

import { MoreHorizontal, Pencil, Trash2, FileText } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import type { Member } from "@/types"

interface MembersTableRowActionsProps {
  member: Member
  onEdit: (member: Member) => void
  onDelete: (memberId: string) => void
  onViewDetails: (member: Member) => void
}

export function MembersTableRowActions({ member, onEdit, onDelete, onViewDetails }: MembersTableRowActionsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
         <DropdownMenuItem onClick={() => onViewDetails(member)}>
          <FileText className="mr-2 h-4 w-4" />
          Details
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onEdit(member)}>
          <Pencil className="mr-2 h-4 w-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10" onClick={() => onDelete(member.id)}>
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
